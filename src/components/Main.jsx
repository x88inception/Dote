import "./compStyles.css";
import courses from "../assets/images/courses.png";
import community from "../assets/images/community.png";
import project from "../assets/images/project.png";
import Card from "./Card";

let courseInfo = {
  img: courses,
  title: "Courses",
  text: "Learn programing and tech skills Lorem ipsum dolor sit amet consectetur",
};

let communityInfo = {
  img: community,
  title: "Community",
  text: "Learn programing and tech skills Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
let projectInfo = {
  img: project,
  title: "Projects",
  text: "Learn programing and tech skills . Omnis voluptas quod quia fugiat quam, optio voluptatibus pariatur nesciunt cupiditate qui. ",
};

export default function Main() {
  return (
    <main>
      <Card img={courses} title={courseInfo.title} text={courseInfo.text} />
      <Card
        img={community}
        title={communityInfo.title}
        text={communityInfo.text}
      />
      <Card img={project} title={projectInfo.title} text={projectInfo.text} />
    </main>
  );
}
