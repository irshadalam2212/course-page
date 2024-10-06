import Filter from "./components/filter";
import Cards from "./components/cards";
import Spinner from "./components/spinner";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const coursesData = await fetch(apiUrl);
      const data = await coursesData.json();
      console.log(data, "data");
      setCourses(data.data);
      setIsLoading(false);
      console.log(courses, "courses");
    } catch (error) {
      console.log("Error occured while fetching the course");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-500">
      <header className="bg-slate-600 py-4">
        <h1 className="text-white text-3xl font-bold text-center">
          Top Courses
        </h1>
      </header>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {isloading ? <Spinner /> : <Cards courses={courses} category={category}/>}
      </div>
    </div>
  );
}

export default App;
