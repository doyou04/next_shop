import {redirect} from 'next/navigation';
import {createClient} from '@/src/utils/supabase/server';

export default async function PrivatePage(){
    const supabase = await createClient();
    const {data, error} = await supabase.auth.getUser();

    console.log(supabase)

    if(error || !data?.user) {
        redirect("/login")
    }

    return  (
        <div>
            <p>hello {data.user.email}</p>
            <form action="/auth/signout" method="post">
                <button className="button">Sign out</button>
            </form>
        </div>
    )
}