export class Event {
    name: String;
    owner: String; //the user who created event
    location: {}; //Google maps api latitude and longnitude
    address: {};
    description: String;
    category: String;
    startTime: Date;
    endTime: Date;
    ongoing: Boolean;
    attendingUsers: [String];
    limitedAttendees: Boolean;
    maximumParticipants: Number;
}
