export class Event {
    eventName: String;
    eventOwner: String; //the user who created event
    coordinates: [String];
    address: String;
    description: String;
    category: String;
    startTime: Date;
    endTime: Date;
    ongoing: Boolean;
    attendingUsers: [String] 
}
