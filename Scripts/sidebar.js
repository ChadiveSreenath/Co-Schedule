

const topSide = ()=>{

    return `
    
    <div class="top-nav">

    <div class="left-top-nav">

        <span style="display:flex">
            <i class="fa-solid fa-calendar"></i>
            <div>Calender&nbsp;</div>
        </span>

        <span style="display:flex">
            <div >/All</div>
            <i class="fa-solid fa-circle-chevron-down" style="margin-left:20px ;"></i>
        </span>

        <span>
            <i class="fa-solid fa-filter"></i>
        </span>

        <span>
            <i class="fa-solid fa-share-from-square"></i>
        </span>



    </div>
    <div class="right-top-nav">
        <span>
            <i class="fa-solid fa-trophy"></i>
            <i class="fa-solid fa-bell"></i>
        </span>
    </div>


</div>
    
    
    
    `




}

export {topSide}




const sidebar = ()=> {


    return `
    <div id="sidebar">
    <div id="top-side-bar" style="display: grid">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-calendar"></i>
        <i class="fa-solid fa-shuffle"></i>
        <i class="fa-solid fa-signal"></i>
        <img  style="height: 13px; width: 17px;margin: auto;" class="badge-image" src="https://app.coschedule.com/img/downgrade/banner-7a6c6a653a0ba9fcfb4d6475f9ce7441.svg" alt="Badge with star">
    </div>
    <div id="lower-side-bar" style="display: grid;">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-circle-question"></i>
    </div>
</div>

    `
}

export {sidebar}