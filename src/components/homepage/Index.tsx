import React from "react";
import Producten from "../producten/Index";
import Intro from "../intro/Index";
import Menu from "../menu/Index";
import LoginPopup from "../loginpopup/Index";
import Cookies from 'universal-cookie';
interface Props {
  readingGuideData?: iCourseReadingGuide[];
  sortedData?: iWeek[];
}

const Homepage: React.FC<Props> = ({ sortedData, readingGuideData }) => {
  const cookies = new Cookies();
  const cookieCode = cookies.get('code');
  console.log('cookieCode', cookieCode);
  const popup = cookieCode !== '1337' ? <LoginPopup /> : <></>;
  return (
    <div>
      {popup}
      <Intro />
      <Producten sortedData={sortedData} />
      <Menu />
    </div>
  );
};
export default Homepage;
