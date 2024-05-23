import React from "react";
import PlaceShowcase from "./PlaceShowcase";
import PlaceInfo from "./PlaceInfo";
import PlaceOffer from "./PlaceOffer";
import BookingDate from "./BookingDate";
import PlaceReview from "./PlaceReview";
import ImportantInfo from "./ImportantInfo";

function Place() {
  return (
    <>
      <PlaceShowcase />
      <PlaceInfo />
      <PlaceOffer />
      <BookingDate />
      <PlaceReview />
      <ImportantInfo />
    </>
  );
}

export default Place;
