class Event {
    name: String;
    owner: String;
    coordinates: [String];
    address: String;
    description: String;
    category: String;
    startTime: Date;
    endTime: Date;
    ongoing: Boolean;
    attendingUsers: [String];
}

export default Event;