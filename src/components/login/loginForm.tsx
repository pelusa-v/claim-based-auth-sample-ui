import React from "react";

interface IAppProps {
}

const LoginForm : React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="bg-zinc-600 p-8 rounded-md">
        <div className="mb-5 text-white">Register!</div>
        <div className="mb-2">
            <div>
                <label className="justify-start flex text-xs text-white mb-1"  htmlFor="email">Email</label>
            </div>
            <input id="email" className="rounded-sm p-1" type="text" placeholder="esample@org.com" />
        </div>
        <div className="mb-2">
            <div>
                <label className="justify-start flex text-xs text-white mb-1" htmlFor="password">Password</label>
            </div>
            <input id="password" className="rounded-sm p-1" type="text" placeholder="8 characters"/>
        </div>
    </div>
  );
};

export default LoginForm;
