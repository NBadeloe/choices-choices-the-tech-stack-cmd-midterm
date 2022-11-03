import * as prismic from "@prismicio/client"
import sm from "../sm.json"





const Page = ({ page }) => {

     return <div> {page.data.introduction}</div>
}
export default Page

export const getStaticProps = async () => {
const client = prismic.createClient(sm.apiEndpoint)
const page = await client.getSingle("midterm") 


return {
    props: {
        page
    }
}


}