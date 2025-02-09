import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";




const AllSlots = () => {
  const [todaySlots,setTodaySlots] = useState("")
  const [tommorowSlots, setTommorowSlots] = useState("");
    useEffect(() => {
        fetch(
          `http://127.0.0.1:8000/api/consultation/slot_list/?doctor_id=3&date=2023-01-26`
        ).then(async (response) => {
          const result = await response.json();
          console.log(result)
          setTodaySlots(result[0]);
          setTommorowSlots(result[1])
        });
    },[])
  return (
    <Tabs
      defaultActiveKey="today"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="today" title="Today">
        {todaySlots.length > 0 ? (
          <>
            {todaySlots.map((slot) => (
              <>
                <button key={slot.slot_id}>
                  {slot.start_time} {slot.end_time}
                </button>
                <br />
              </>
            ))}
          </>
        ) : (
          <>No Slots created for this day!!!</>
        )}
      </Tab>
      <Tab eventKey="tommorow" title="Tommorow">
        {tommorowSlots.length > 0 ? (
          <>
            {tommorowSlots.map((slot) => (
              <>
                <button key={slot.slot_id}>
                  {slot.start_time} {slot.end_time}
                </button>
                <br />
              </>
            ))}
          </>
        ) : (
          <>No Slots created for this day!!!</>
        )}
      </Tab>
    </Tabs>
  );
}

export default AllSlots