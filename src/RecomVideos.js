import React from 'react'
import './RecomVideos.css'
import VideoCard from './VideoCard'

function RecomVideos() {
    return (
        <div className="recomvideos">
            <h2>Recommended</h2>
            <div className="recomvideos__videos">
                <VideoCard
                title="An asshole fucks with me"
                views="1.3M views"
                timestamp="4 hours ago"
                channelImage="https://assets.rockpapershotgun.com/images/2020/10/Aiden-Pearce-Watch-Dogs-Legion.jpg"
                channel="A Test User"
                image="https://64.media.tumblr.com/2208a3b4e0f278bf20e0edb6d55a91a0/tumblr_or5reaIA2o1w04g41o3_500.png"
                />
                <VideoCard
                title="An Intro to ReactJS"
                views="12.9M views"
                timestamp="5 months ago"
                channelImage="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/12/06/11973bee-172a-11ea-9462-4dd25a5b0420_image_hires_104444.jpg?itok=jiYJoo1X&v=1575600292"
                channel="Sergey Brin"
                image="https://lh3.googleusercontent.com/proxy/iNWJD52NC8tOR47eC9swU5bZAt7jYTaXiXn0yrWFr-wcKrL9at7_F3YMl9eAzlLvv7AA1r6jG_-9-TEYg8bpmN0R1WYO-6DEgGAmg3L8KeJDvfMBJ2E" />
                <VideoCard 
                title="What the actual ever living Fuck?!"
                views="233K views"
                timestamp="6 days ago"
                channelImage="https://www.dcreport.org/wp-content/uploads/2018/03/Ice-Cube-WTF.jpg"
                channel="WTFGuy"
                image="https://i.ytimg.com/vi/VowEV23Z0hM/maxresdefault.jpg"
                />
                <VideoCard 
                title="BOOTY WORKOUT! / YANET GARCIA"
                views="182K views"
                timestamp="Mar. 31, 2020"
                channelImage="https://i.ytimg.com/vi/oasMhY_xltU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6V5f6s80jDkQ31JR7M1ToIiMFwQ"
                channel="Yanet Garcia"
                image="https://i.ytimg.com/vi/WHcSHj99JJk/hqdefault.jpg"
                />
                <VideoCard
                title="Can You Beat Skyrim By Only Using Scrollls ?"
                views="1M views"
                timestamp="1 month ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gh_aOMTiySEONOCmxS6Qpre61VOkFC19kVWTg=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Mitten Squad"
                image="https://i.ytimg.com/vi/NbA4qT95x4s/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD0Xvny_wFGI__dj3qTt8K5QMREOA"
                />
                <VideoCard
                title="Sweet Anita finally admits it"
                views="192K views"
                timestamp="10 hours ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gg9Q2Ud5w48jMbs_aUPiD7bGgJi9ME2KQE9IQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Twitchify"
                image="https://i.ytimg.com/an_webp/5mSv7G_sG0U/mqdefault_6s.webp?du=3000&sqp=COGMqf0F&rs=AOn4CLBytdLwzgWnXanZod5sauPIfDdIxw" />
                <VideoCard 
                title="Watching the Mandalorian Credits be Like...."
                views="91K views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj6Tv5W_vV4uk1-_-SBnb_GYoUo8JOgig0ejw=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="EndlessAbyss"
                image="https://i.ytimg.com/an_webp/dCxthHoIKkc/mqdefault_6s.webp?du=3000&sqp=CM7kqP0F&rs=AOn4CLCwfeq-kbEQvQWYylC08oCrkNADQw"
                />
                <VideoCard 
                title="Curb Your Betrayal"
                views="582K views"
                timestamp="2 years ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgQTJUhkOA2ADPJoIccCug6ABdsMJcbkRNINQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="TheForgery"
                image="https://i.ytimg.com/an_webp/q5v6Zi_w6Xk/mqdefault_6s.webp?du=3000&sqp=CM7fqP0F&rs=AOn4CLD9qgX9UDwfB7FgPNmNUgHOW7036Q"
                />
                <VideoCard
                title="Baby Yoda Is Scared of Spiders! - Season 2x2(cute..."
                views="43K views"
                timestamp="1 day ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gjm_d4ERp1vSQiNBvKpaSwv0iybp6m_XTHydQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="agameoffantasy"
                image="https://i.ytimg.com/an_webp/42CIcgTKYH8/mqdefault_6s.webp?du=3000&sqp=CNX3qP0F&rs=AOn4CLA7yTJNJix7pcyqrFNbGM7JSIUeLg"
                />
                
            </div>
        </div>
    )
}

export default RecomVideos
