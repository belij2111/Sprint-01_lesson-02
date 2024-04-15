import {setDB} from "../src/db/db";
import {HTTP_STATUSES, SETTINGS} from "../src/settings";
import {req} from "./test-helpers";

describe('/blogs', () => {
    it('should get all blogs', async () => {
        setDB()
        const res = await req
            .get(SETTINGS.PATH.BLOGS)
            .expect(HTTP_STATUSES.OK_200)
        console.log(res.body)
        expect(res.body.length).toBe(0)
    });
})