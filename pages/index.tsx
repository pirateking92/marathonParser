import { GetServerSideProps } from "next";
// allows us to fetch data on the server side and pass it as props to the page component
// JSON data is thus collected on every request, so handles cases when info is changed
import { Athlete } from "../types";
import { useState } from "react";
import AthleteList from "../components/AthleteList";
import SortOptions from "../components/SortOptions";
import ExportButton from "../components/ExportButton";

export const getServerSideProps: GetServerSideProps = async () => {
  // routes are the filenames
  const res = await fetch("https://marathonparser.onrender.com/api/marathons");
  if (!res.ok) {
    // error checking
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  // currently getting props for the racename and all the athlete info. could change later depending on what info we might need to pull
  const { racename, athletes }: { racename: string; athletes: Athlete[] } =
    await res.json();

  return {
    props: { racename, athletes },
  };
};

const IndexPage = ({
  racename,
  athletes,
}: {
  racename: string;
  athletes: Athlete[];
}) => {
  const [athletesState, setAthletesState] = useState<Athlete[]>(athletes);

  const sortByRank = () => {
    const sortedAthletes = [...athletesState].sort((a, b) => a.rank - b.rank);
    setAthletesState(sortedAthletes);
  };
  // bib number is a string, so need to parse it as an integer to get it to read properly
  const sortByBibNumber = () => {
    const sortedAthletes = [...athletesState].sort((a, b) => {
      const bibnumA = parseInt(a.bibnumber, 10);
      const bibnumB = parseInt(b.bibnumber, 10);
      return bibnumA - bibnumB;
    });
    setAthletesState(sortedAthletes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url('https://thumbs.dreamstime.com/b/giraffe-isolated-12314083.jpg')]">
      <nav className="bg-slate-400 p-4 fixed top-0 w-full z-50">
        <ul className="flex justify-between">
          <li>
            <a
              href="https://portgasdfolioace.vercel.app/"
              className="text-white peer-hover:"
            >
              {/* nextjs wants to use 'Image' here, but research said that unless you're using many images, that its not a problem
              will be good to look into though */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/5be053b7cef372e7bbfdd9a8/1587465301353-A5VDQEDBD0AZ3YTIK4P3/BRF_Logo+%281%29.png?format=750w"
                alt="Bedford Marathon Logo"
                className="w-16"
              />
            </a>
          </li>
          <li></li>
          <li>
            <a
              href="https://github.com/pirateking92"
              className="text-white font-montserrat"
            >
              Matt Doyle - GitHub
            </a>
          </li>
        </ul>
      </nav>
      <AthleteList athletes={athletesState} racename={racename} />
      <div className="flex space-x-4 mb-4">
        <SortOptions
          sortByRank={sortByRank}
          sortByBibNumber={sortByBibNumber}
        />
        <ExportButton athletes={athletesState} />
      </div>
    </div>
  );
};

export default IndexPage;
