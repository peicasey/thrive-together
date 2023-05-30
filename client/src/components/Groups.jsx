import React, { useEffect, useState } from "react";

const Group = (props) => (
  <div className="bg-slate-200 dark:bg-slate-800 p-4">
    <h3>{props.group._name}</h3>
    {/* <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td> */}
  </div>
 );

export default function Groups() {
  const [groups, setGroups] = useState([
    {
      "_name": "Canadian Crochet Collective",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 2,
      "_desc": "Collective for all Canadian crochet products",
      "_store": "NA",
      "_coverImg": "https://i.pinimg.com/originals/64/89/56/6489569a2e3536aec9660c9ca1bae5eb.jpg",
      "_tagList": ["Canada"],
    },
  ]);

  // This method will map out the records on the table
  function groupList() {
    return groups.map((group) => {
      return (
        <Group
          group={group}
          // deleteRecord={() => deleteRecord(record._id)}
          // key={record._id}
        />
      );
    });
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <h1 className="mt-24 ml-12">Browse</h1>

      <div className="mt-8 ml-12 mr-12 flex g-12">
        <div className="border-r-2 border-slate-400 dark:border-slate- w-1/4">
          <h2>Search</h2>
        </div>
        <div className="flex col-span-4">
          {groupList()}
        </div>
      </div>
    
    </div>
  );
}