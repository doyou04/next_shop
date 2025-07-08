'use client';

import React, { useState } from "react";
import {login, signup} from './action';

export default function LoginPage(){

    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');

    const onChangEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
       setEmail(event.target.value);
    }
    const onChangePw = (event:  React.ChangeEvent<HTMLInputElement>) =>  {
       setPw(event.target.value);
    }


    return (
        <div>
            <form className="flex flex-col justify-center mt-[20px]">
                {/* <h3 className="text-[22px] text-center mb-2">로그인</h3> */}
                <div className="flex flex-col justify-items-center">
                    <input type="text" name="email" className=" border border-zinc-400 min-w-0 mb-2 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline sm:text-sm/6" value={email} onChange={onChangEmail} />
                    <input type="text" name="pw" className="border border-zinc-400 min-w-0 mb-2 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline sm:text-sm/6" value={pw} onChange={onChangePw}/>
                    <button type="submit" className="bg-blue-500 text-white p-4 rounded-xl text-center" formAction={login}>login</button>
                </div>
                <button type="submit" className="bg-white border mt-2 border-zinc-400 w-105" formAction={signup}>회원가입</button>
            </form>
        </div>
    );
}