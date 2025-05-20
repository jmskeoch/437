import{i as t,x as r,r as e,a as o}from"./reset.css-DkJdaEjN.js";const d=class d extends t{constructor(){super()}render(){return r`
                <dl>
                <dt> Date </dt>
                <dd><slot name="date">date</dd>

                <dt> Weather </dt>
                <dd><slot name="weather">weather</dd>

                <dt> Damage </dt>
                <dd><slot name="damage">dmg</dd>

                <dt> Rigged By </dt>
                <dd><a href="/rat.html"> Adan Shaw </a></dd>
                </dl>
            `}};d.styles=[e.styles,o`
        dl {
            max-width: 400px;
            margin: 2rem auto;
            padding: 1rem;
            background-color: var(--color-background-page);
            border-radius: 8px;
        }

        dt {
            font-weight: bold;
            margin-top: 1rem;
        }

        dd {
            margin: 0 0 1rem 0;
            padding-left: 1rem;
        }
    `];let a=d;export{a as S};
