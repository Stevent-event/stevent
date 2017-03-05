export class Event {
    name: String;
    owner: String; //the user who created event
    location: {
        lat: Number,
        lng: Number,
    }; //Google maps api latitude and longnitude
    address: {
        formatted_address: String;
    };
    description: String;
    category: String;
    startTime: Date;
    endTime: Date;
    ongoing: Boolean;
    attendingUsers: [String]
    limitedAttendees: Boolean;
    maximumAttendees: Number;
}
