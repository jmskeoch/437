import{i as a,x as r,b as e}from"./lit-element-Bh8ygNlb.js";import{r as o}from"./reset.css-CUZ4bYjz.js";const d=class d extends a{constructor(){super()}render(){return r`
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
            `}};d.styles=[o.styles,e`
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
    `];let t=d;export{t as S};
