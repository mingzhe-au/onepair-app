import { Injectable } from '@angular/core';
import { IMentee, IMentor, IPair } from "../models/people.model";

@Injectable({
  providedIn: 'root'
})
export class PairsService {

  constructor() { }

  public calculatePeopleRating(people: IMentee | IMentor): number {
    return people.rating;
  }

  public calculatePairScore(mentee: IMentee, mentor: IMentor): number {
    let score = 0;
    if (mentee.gender === mentor.gender) {
      score++
    }
    if (mentee.city === mentor.city) {
      score++
    }
    const ratingDiff = this.calculatePeopleRating(mentee) - this.calculatePeopleRating(mentor)
    score = score - Math.abs(ratingDiff)
    return score
  }

  public sortPeopleByRating(people: IMentee[] | IMentor[]): IMentee[] | IMentor[] {
    return people.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

  public sortPairsByScore(pairs: IPair[]): IPair[] {
    return pairs.sort((a, b) => {
      return b.score - a.score;
    });
  }

//  match mentors and mentees if they have most common attributes
  public async matchPeople(mentors: IMentor[], mentees: IMentee[]): Promise<IPair[]> {
    let pairs: IPair[] = [];
    let tempPairs: IPair[] = [];
    let mentorsSorted = this.sortPeopleByRating(mentors);
    let menteesSorted = this.sortPeopleByRating(mentees);
    const menteeMentorRate = Math.ceil(menteesSorted.length / mentorsSorted.length);
    for (let i = 0; i < menteesSorted.length; i++) {
      for (let j = 0; j < mentorsSorted.length; j++) {
        let pair = {
          pairId: `mentee-${menteesSorted[i].id}-mentor-${mentorsSorted[j].id}`,
          mentee: menteesSorted[i],
          mentor: mentorsSorted[j],
          score: this.calculatePairScore(menteesSorted[i], mentorsSorted[j])
        }
        tempPairs.push(pair)
      }
      let sortedTempPair = this.sortPairsByScore(tempPairs);
      for (let k = 0; k < sortedTempPair.length; k++) {
        if (!sortedTempPair[k].mentor.pairTime || sortedTempPair[k].mentor.pairTime as number <= menteeMentorRate) {
          pairs.push(sortedTempPair[k])
          // mentorsSorted.find(mentor => mentor.id === sortedTempPair[k].mentor.id).pairTime = sortedTempPair[k].mentor.pairTime ? (sortedTempPair[k].mentor.pairTime as number) + 1 : 1;
          break;
        }
      }
    }
    return pairs;
  }
}
