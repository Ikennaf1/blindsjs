import TopicCollapsible from "../../TopicCollapsible";
import VersionList from "../../VersionList";
import topics from './topics.json';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const TopicListCollapsible = () => {

    const [allTopics] = useState(Object.entries(topics));

    return (
        <TopicCollapsible>
            <VersionList defaultVersion="v0" className="mt-5" />

            <div className="mt-5 h-1/2 overflow-y-auto">
                <ul id="topic_list_collapsible">
                {
                    allTopics.map((topic, i) =>                     
                        <NavLink to={`/docs/${topic[1]}`} className="topic-list-items-collapsible"><li key={i+100}>{topic[0]}</li></NavLink>                    
                    )
                }
                </ul>
            </div>

        </TopicCollapsible>
    );
}

export default TopicListCollapsible;
