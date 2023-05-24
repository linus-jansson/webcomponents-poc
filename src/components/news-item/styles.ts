import {css} from 'lit'

export const styles = css`
    .c-black {
        color: #222;
    }

    .list-card {
        margin-bottom: 100px;
        text-decoration: none;
    }

    .col-4 {
        
        float: left;
    }

    .list-card-inner {
        -webkit-box-shadow: 0 45px 60px 0 rgba(0,0,0,.15);
        box-shadow: 0 45px 60px 0 rgba(0,0,0,.15);
        -webkit-transition: -webkit-box-shadow .4s ease;
        transition: -webkit-box-shadow .4s ease;
        -o-transition: box-shadow .4s ease;
        transition: box-shadow .4s ease;
        transition: box-shadow .4s ease,-webkit-box-shadow .4s ease;
        background: #fff;
        max-height: 610px;
        margin-bottom: 40px;
        width: calc(100% * 4/12 - (87px - 87px * 4/12));
    }

    .list-card-inner .image-holder img {
        width: 100%;
        display: block;
        opacity: 0;
    }

    .list-card-inner .card-content-holder {
        padding: 30px;
        min-height: 450px;
    }

    .list-card-inner .image-holder {
        background-repeat: no-repeat;
        background-size: cover;
    }

    .bg-white {
        background-color: #fff;
    }

    .list-card-inner .card-content {
        position: relative;
        height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .list-card-inner .card-content .card-date {
        font-size: 12px;
        line-height: 16px;
        color: indigo;
        letter-spacing: .4px;
        margin-top: 0;
        margin-bottom: 15px;
        font-family: "Neurial Grotesk Medium";
    }

    .list-card-inner .card-content .title-s {
        width: 100%;
        font-size: 24px;
        line-height: 31px;
    }

    .list-card-inner .excerpt {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 24px;
    }


    .list-card-inner .readmore {
        color: #dd0890;
        text-decoration: none;
        display: inline-block;
        margin-bottom: 35px;
        position: relative;
        font-family: "Neurial Grotesk Medium";
        font-size: 18px;
        letter-spacing: .6px;
        text-transform: uppercase;
        padding-right: 15px;
        margin-top: auto;
    }

    .news-line {
        width: 100%;
        height: 5px;
        background-image: -webkit-gradient(linear,right top,left top,from(#0de1ec),color-stop(30%,#200c9c),color-stop(70%,#4a0082),to(#dd0890));
        background-image: -webkit-linear-gradient(right,#0de1ec 0,#200c9c 30%,#4a0082 70%,#dd0890 100%);
        background-image: -o-linear-gradient(right,#0de1ec 0,#200c9c 30%,#4a0082 70%,#dd0890 100%);
        background-image: linear-gradient(-90deg,#0de1ec 0,#200c9c 30%,#4a0082 70%,#dd0890 100%);
        position: absolute;
        bottom: 0;
    }
`;
