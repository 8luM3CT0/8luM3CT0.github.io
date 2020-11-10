import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
            image="https://i.redd.it/offhl4bln4p01.jpg"
            channel="John Seed"
            verified
            subs="1.9M"
            noOfVideos="7"
            description="I am the one who hunts you, I will be the one who brings you to the gates of Eden"
            />
            <hr />
            <VideoRow
            image="https://i.ytimg.com/vi/Ia4A4pqla4g/maxresdefault.jpg"
            title="Social Network(2010) - Hacking scene "
            channel="John Seed"
            subs="1.9M"
            views="19M"
            timestamp="10 years ago"
            description="Mark Zuckerberg hacks in to the Harvard facebooks and crashes the servers of the school. Social Network is a semi-biographical film based on the novel Accidental Billionaires...."
            />
            <VideoRow
            image="https://i.ytimg.com/sh/PX-vtc0UjN0SqY89VVZFnw/market.jpg"
            title="Mr. Robot - Season 1 "
            channel="Rami Malek Fans"
            subs="223K"
            views="1.9M"
            timestamp="2 years ago"
            description="Entire first season of Mr. Robot. Click on the link https://......."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/CUXwWkY_Ttg/maxresdefault.jpg"
            title="Funny Klarity Vines 2020 - Vine Age"
            channel="Vine Age"
            subs="1.2M"
            views="7.8k"
            timestamp="2 months ago"
            description="In this compilation you can find one of the beat viners ever. Enjoy watching this comedy vine compilation. Pleas don't forget to SUBSCRIBE the Channel and SHARE...."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg"
            title="Python Full Course for Beginners (Tutorial) 2019 | by Clever Programmer"
            channel="Clever Programmer"
            subs="660K"
            views="92,5K"
            timestamp="1 year ago"
            description="
            If you want to enroll in this course where you can have exercises and projects all under one account & for FREE... Click this link https://cleverprogrammer.t...."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/XQCTNw-5QfQ/maxresdefault.jpg"
            title="THE BOYS | Homelander "
            channel="Jesse JR"
            subs="16K"
            views="125K"
            timestamp="1 month ago"
            description="«I'm the Homelander and i can do whatever the f*** i want.» ... Headphones + 4K are highly recommended Don't forget to like, comment, share and subscribe, it...."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/Hok-h5xJYa0/maxresdefault.jpg"
            title="Donna Paulsen || Hey Na Na (humor)"
            channel="cecealways"
            subs="22K"
            views="394K"
            timestamp="6 years ago"
            description="`And the Donna of today is a genius.. Well the genius of Donna is everyday` DONNA PAULSEN, the queen of everything. I hope you like it. :)."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/rvgy7QD2W8s/maxresdefault.jpg"
            title="The cast discuss Charles Augustus Magnussen - Sherlock: Series 3 Episode 3 - BBC One"
            channel="BBC"
            subs="2.1M"
            views="133K"
            timestamp="6 years ago"
            description="Subscribe and 🔔 to OFFICIAL BBC YouTube 👉 https://bit.ly/2IXqEInStream original BBC programmes FIRST on BBC iPlayer 👉 https://bbc.in/2J18jYJhttp://www.bbc.co...."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/kK4hj_GUSnE/maxresdefault.jpg"
            title="Slash - Gotten (feat. Adam Levine)"
            channel="Metal8909"
            subs="210K"
            views="1.78M"
            timestamp="10 years ago"
            description="Song: Gotten Artist: Slash (Featuring Adam Levine) Album: Slash Year: 2010 Record Label: EMI (United States), Universal Music (Japan), Roadrunner Records (Eu...."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/siUBYdBsC3k/maxresdefault.jpg"
            title="Watch Dogs Legion - FULL Gameplay Demo Presentation | Ubisoft"
            channel="Game Spot"
            subs="3,2M"
            views="41K"
            timestamp="2 months ago"
            description="Check out the the complete gameplay demo presentation of Watch Dogs Legion. In addition to a deep dive on gameplay mechanics, meet Watch Dogs' lead level des..."
            />
            <VideoRow
            image="https://i.ytimg.com/vi/GnFElAfYmdk/maxresdefault.jpg"
            title="Castiel confesses his love to Dean [15x18] - Supernatural Season 15 Episode 18"
            channel="FantasyInReality"
            subs="769K"
            views="11.9M"
            timestamp="2 days ago"
            description="Supernatural 15x18 Castiel confess his feelings for Dean Winchester. REAL DESTIEL MOMENT . !!!!! DESTIEL IT'S CANON!!!!!! Supernatural series finale. Superna...."
            />
        </div>
    )
}

export default SearchPage
