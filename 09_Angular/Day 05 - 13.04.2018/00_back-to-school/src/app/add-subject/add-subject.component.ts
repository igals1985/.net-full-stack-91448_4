import { Component, Output, EventEmitter } from '@angular/core';
import { SubjectInfo } from '../shared/models/subject.model';

@Component({
    selector: 'app-add-subject',
    templateUrl: './add-subject.component.html',
    styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
    newSubject: SubjectInfo;
    @Output() addSub: EventEmitter<SubjectInfo> = new EventEmitter<SubjectInfo>();


    public addNewSubject() {

        this.addSub.emit(this.newSubject);
        this.newSubject = {
            subjectName: "",
            subjectDesc: "",
            subjectLogo: "",
            subjectLink: ""
        };
    }

    constructor() {

        this.newSubject = {
            subjectName: "History",
            subjectDesc: `History (from Greek ἱστορία, historia, meaning "inquiry, knowledge acquired by investigation")[2] is the study of the past as it is described in written documents.[3][4] Events occurring before written record are considered prehistory. It is an umbrella term that relates to past events as well as the memory, discovery, collection, organization, presentation, and interpretation of information about these events. Scholars who write about history are called historians.`,
            subjectLogo: "./assets/history.png",
            subjectLink: "https://en.wikipedia.org/wiki/History"
        };

    }


}
