import UpcomingSet from "./_components/UpcomingSet";
import UpcomingTask from "./_components/UpcomingTask";

export default async function UpcomingPage(){
    return (
        <div className="w-full min-h-screen flex flex-row overflow-y-hidden relative">
            <UpcomingSet></UpcomingSet>
            <UpcomingTask></UpcomingTask>
        </div>
    )
}