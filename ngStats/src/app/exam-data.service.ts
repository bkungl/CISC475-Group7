import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface ExamData {
  id: string;
  position: number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
  questionStr: string;
}

const EXAM_DATA: ExamData[] = [
  {id: "5bdb46cd65fc9f2f70a2d04f", position: 1, exam: 'CS 106 F 17', examDate: "10/11/17", questionType: 'Multiple Choice', difficulty: '1', questionCognitive: 'Creating', questionTags: [], questionStr: 'What is 2+2?'},
  {id: "5bdb46cd65fc9f2f70a2d05f", position: 2, exam: 'CS 106 F 18', examDate: "10/09/18", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'What is Object Oriented Programming?'},
  {id: "5bdb46cd65fc9f2f70a2d06f",position: 3, exam: 'CS 106 S 17', examDate: "3/12/17", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Evaluating', questionTags: [], questionStr: 'Who is your TA?'},
  {id: "5bdb46cd65fc9f2f70a2d07f",position: 4, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'What is 36/6?'},
  {id: "5bdb46cd65fc9f2f70a2d08f",position: 5, exam: 'CS 106 S 18', examDate: "3/20/18", questionType: 'Programming', difficulty: '2', questionCognitive: 'Evaluating', questionTags: [], questionStr: 'What is the meaning of life?'}, 
  {id: "5bdb46cd65fc9f2f70a2d09f",position: 6, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Write out pi.'}, 
  {id: "5bdb46cd65fc9f2f70a2d0af",position: 7, exam: 'CS 106 S 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: [], questionStr: 'Code QuickSort.'},
  {id: "5bdb46cd65fc9f2f70a2d0bf", position: 8, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: [], questionStr: 'Which sort is O(n)?'},
  {id: "5bdb46cd65fc9f2f70a2d0cf",position: 9, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Write an O(log(n)) sort.'},
  {id: "5bdb46cd65fc9f2f70a2d0df",position: 10, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Applying', questionTags: [], questionStr: 'Who is UDs president?'},
  {id: "5bdb46cd65fc9f2f70a2d0ef",position: 11, exam: 'CS 106 F 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Applying', questionTags: [], questionStr: 'What is Angular?'},
  {id: "5bdb46cd65fc9f2f70a2d0ff",position: 12, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '1', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Create a linked list node.'}
];

@Injectable({
  providedIn: 'root'
})
export class ExamDataService {
    private QIDSource = new BehaviorSubject('default QID');
    currentQID = this.QIDSource.asObservable();
    constructor() { }
    exams  = Object.assign([], EXAM_DATA);
    question;
    results  = Object.assign([], EXAM_DATA);

    changeQID(QID: string) {
      this.QIDSource.next(QID)
    }
   
    found(EXAM_DATA, currentQID){
        
        for(let result of this.results){        
            if (result.position = currentQID){
                this.question = result;
            }
        }       
    }
    
}
