import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooking } from "../../redux/bookingsRedux/requestBooking";

const AllBooking = () => {
  const { bookings } = useSelector((state) => state.bookings);
  console.log("trdr", bookings);
  const dispatch = useDispatch();

  const [booking, setBooking] = useState(bookings);

  const handleChange = (key, value) => {
    setBooking({ ...booking, [key]: value });
    console.log(booking);
  };

  useEffect(() => {
    dispatch(getAllBooking());
  }, [dispatch]);

  return (
    <div>
      <h2>Les réservations</h2>
      <div>
        {bookings.map((booking) => (
          <form>
            <label htmlFor="departureDate">Date de départ :</label>
            <input
              type="date"
              id="departureDate"
              value={booking.departureDate}
              onChange={(e) => handleChange("departureDate", e.target.value)}
            />
            <label htmlFor="returnDate">Date de retour :</label>
            <input
              type="email"
              id="returnDate"
              value={booking.returnDate}
              onChange={(e) => handleChange("departureDate", e.target.value)}
            />
            <label htmlFor=" priceAddtionalDrive">
              Prix conducteur additionnel :
            </label>
            <input
              type="text"
              id=" priceAddtionalDrive"
              value={booking.priceAddtionalDrive}
              onChange={(e) => handleChange("departureDate", e.target.value)}
            />
            <input type="submit" value="Envoyer" />
          </form>
        ))}
      </div>
    </div>
  );
};
export default AllBooking;
