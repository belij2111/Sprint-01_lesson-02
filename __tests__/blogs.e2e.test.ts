import {setDB} from "../src/db/db";
import {HTTP_STATUSES, SETTINGS} from "../src/settings";
import {req} from "./test-helpers";
import {blogDataset1} from "./blogs-datasets";

describe('/blogs', () => {
    it(`should get empty array`, async () => {
        setDB()
        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(HTTP_STATUSES.OK_200)
        console.log(res.body)
        expect(res.body.length).toBe(0)
    });
    it(`should get not empty array`, async () => {
        setDB(blogDataset1)
        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(HTTP_STATUSES.OK_200)
        console.log(res.body)
        expect(res.body.length).toBe(1)
        expect(res.body[0]).toEqual(blogDataset1.blogs[0])
    });
})