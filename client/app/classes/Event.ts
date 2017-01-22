export class Event {
    eventName: String;
    eventOwner: String; //the user who created event
    location: {}; //Google maps api latitude and longnitude
    address: String;
    description: String;
    category: String;
    startTime: Date;
    endTime: Date;
    ongoing: Boolean;
    attendingUsers: [String] 
}
