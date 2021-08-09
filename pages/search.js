import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Image from "next/image";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
function Search({ searchResults }) {
  const router = useRouter();

  const { startDate, endDate, location, numberOfGuests } = router.query;

  const formattedStartsDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartsDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className="flex flex-col">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs ">
            300+ styas - {range} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="py-2 px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transform duration-100 ease-out">
              Collection Flexibility
            </p>
            <p className="py-2 px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transform duration-100 ease-out">
              Type of Place
            </p>

            <p className="py-2 px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transform duration-100 ease-out">
              Price
            </p>

            <p className="py-2 px-4 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transform duration-100 ease-out">
              Rooms and Beds
            </p>
          </div>

          <div className="">
          {searchResults?.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard 
              key={img} 
              img={img} 
              title={title}
              location={location}
              description={description}
              star={star}
              price={price}
              total={total}
              />
            ))}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://links.papareact.com/isz"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
