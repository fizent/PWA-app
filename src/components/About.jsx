import { Fragment } from "react";

export default function About() {
    return(
        <Fragment>
            <h1 className="message AboutText color-white">درباره من</h1>
            <p className="message AboutText">من فاضل هستم، یک توسعه‌دهنده مشتاق در زمینه وب، هوش مصنوعی و اینترنت اشیا. عاشق دنیای تکنولوژی هستم و تلاش می‌کنم با ایجاد اپلیکیشن‌ها و راهکارهای نوآورانه، زندگی مردم در سراسر جهان را آسان‌تر کنم.</p>
            <a className="message AboutText Link color-text-dashbord displayA" href="https://fazelzare.liara.run/">سایت سازنده</a>
            <div className="div-logo">
               <img className="wid-logo" src="/public/LOGO Fazel.png" alt="" />
            </div>
        </Fragment>
    )
}