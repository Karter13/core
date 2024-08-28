import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";
import { revalidatePath } from "next/cache";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string
}) {
  const courseList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseListElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return <div className="flex flex-col gap-3">{
    courseList.map(course => (
      <CourseItem
        key={course.id}
        course={course}
        onDelete={handleDeleteAction.bind(null, course.id)}
      />
    ))
  }</div>;
}
