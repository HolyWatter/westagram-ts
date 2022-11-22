import MainHeader from "./Components/MainHeader";
import MainAside from "./Components/MainAside";
import MainArticle from "./Components/MainArticle";

const Main = () => {
  return (
    <>
    <MainHeader />
    <div className="mainAndAside">
      <MainArticle />
      <MainAside />
    </div>
  </>
  );
};

export default Main;
