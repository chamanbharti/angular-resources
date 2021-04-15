import {Request, Response} from 'express';
import {COURSES} from '../src/db-data';


export function getAllCourses(req: Request, res: Response) {
    debugger

    res.status(200).json(Object.values(COURSES));


}


export function getCourseById(req: Request, res: Response) {
    debugger
    const courseId = req.params['id'];

    const courses: any = Object.values(COURSES);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}
