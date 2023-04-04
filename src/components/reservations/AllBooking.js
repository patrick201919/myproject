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
      <h1>Les réservations</h1>
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

// {
//   users.map((user) => (
//     <ul key={user.id}>
// {
/* <li>{user.firstName}</li>
      <li>{user.name}</li>
      <li>{user.birthDay}</li>
      <li>{user.address}</li>
      <li>{user.postCode}</li>
      <li>{user.city}</li>
      <li>{user.country}</li>
      <li>{user.telephone}</li>
      <li>{user.email}</li>
      <li> {user.id}</li>
      <Link key={user.id} to="/profile/update">
        <button>modifier</button>
      </Link>
      <button onClick={() => dispatch(deleteUser(user.id))}>supprimer</button>
    </ul>
  ));
} */
// }

// <ul key={booking.id}>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
// <li>{booking.departureDate}</li>
//{
/* returnDate, rentalPeriod, priceAddtionalDrive, priceDepositCar,
            priceChildSeat5to12, priceChildSeat1to4, priceChildSeat12m,
            priceDepositScooter, priceDepositElecScooter, priceDepositBike,
            priceScooterHelmet, priceBikeHelmet, priceElecScooterHelmet,
           // totalAmount, */
//}
//{/* </ul> */}
