/* import Event component here  */
import Event from "./Event";

const EventArray = [
  {
    title: "Anual Meeting",
    description: "our anual meeting hapening now",
    place: "Copenhagen, Denmark",
    time: "12:00 - 14:00",
    image: "./assets/images/oro-cumu-anual-meeting.png",
  },
  {
    title: "Get to Gether",
    description: "we are holding anual party.",
    place: "Aalborg, Denmark",
    time: "12:00 - 18:00",
    image: "./assets/images/gettogether.png",
  },
  {
    title: "Politics",
    description:
      "A website that provides information about the Greek islands. through the website the user can see some images of the Islands and can read about it. I learnt how to make read more and read less through the project and I also learnt how to change the images by clicking right and left arrows.",
    place: "Åarhus, Denmark",
    time: "12:00 - 14:00",
    image: "./assets/images/oromo-Politics.png",
  },
  {
    title: "Advocacy",
    description:
      "A website that provides information about the Greek islands. through the website the user can see some images of the Islands and can read about it. I learnt how to make read more and read less through the project and I also learnt how to change the images by clicking right and left arrows.",
    place: "Åarhus, Denmark",
    time: "10:00 - 15:00",
    image: "./assets/images/oro-cumu-anual-meeting.png",
  },
];

const Events = () => {
  return (
    <ul className="event-item-list">
      <div className="event-container">
        <h2 className="event-title">Some of our Events</h2>
        <p className="event-info">
          We are holing different comunity events and helping the community. we
          are working for the better.
          <br />
          Here under you can find differen events going on currently and we are
          trying to do more activities as well. check it out.
        </p>
        <div className="event-flex-container">
          <li className="event-list">
            {EventArray.map((Event) => (
              <Event
                title={Event.title}
                description={Event.description}
                place={Event.place}
                time={Event.time}
                image={Event.image}
              />
            ))}
          </li>
        </div>
      </div>
    </ul>
  );
};

export default Events;
