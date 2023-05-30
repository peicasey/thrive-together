import React, { useEffect, useState } from "react";

const Group = (props) => (
  <div className="group/grp bg-teal-100 dark:bg-slate-800 hover:-translate-y-0.5 hover:rounded-lg duration-500">
    <img
      className="group-hover/grp:rounded-t-lg h-32 w-full resize duration-500"
      src={props.group._coverImg}
    />
    <div className="p-4">
      <h3 className="font-bold leading-6 text-lg text-emerald-800 dark:text-teal-600 line-clamp-1 group-hover/grp:line-clamp-none duration-500">
        {props.group._name}
      </h3>
      <p className="text-sm line-clamp-2 group-hover/grp:line-clamp-none"><em>{props.group._desc}</em></p>
      <p>Members: {props.group._numMem}</p>
      <div className="mt-2 flex gap-2">{tagList(props.group._tagList)}</div>
    </div>
    
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


function tagList(tags) {
  return tags.map((tag) => {
    return (
      <Tag
        tag={tag}
      />
    );
  });
}

const Tag = (props) => (
  <div className="bg-emerald-700 w-min pr-2 pl-2 rounded-full text-xs">
    { props.tag._name }
  </div>
);

export default function Groups() {
  const [groups, setGroups] = useState([
    {
      "_name": "Canadian Crochet Collective",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 123,
      "_desc": "Collective for all Canadian crochet products",
      "_store": "NA",
      "_coverImg": "https://i.pinimg.com/originals/64/89/56/6489569a2e3536aec9660c9ca1bae5eb.jpg",
      "_tagList": [{"_name": "Canada", "_color": "#800000"}],
    },
    {
      "_name": "Textile Team Worldwide!",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 3,
      "_desc": "We create all kinds of different textiles for either collectors or for clothing manufacturers!",
      "_store": "NA",
      "_coverImg": "https://www.silvateam.com/en/sites/silvateam.com.en/files/article/cravatte.jpg",
      "_tagList": [{"_name": "World", "_color": "#c0cbff"}, {"_name": "Textiles", "_color": "#c0cbff"}],
    },
    {
      "_name": "Makeup 💅",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 12,
      "_desc": "We create all kinds of different textiles for either collectors or for clothing manufacturers!",
      "_store": "NA",
      "_coverImg": "https://therighthairstyles.com/wp-content/uploads/2017/07/8-volumizing-hair-products.jpg",
      "_tagList": [{"_name": "China", "_color": "#c0cbff"}, {"_name": "Beauty", "_color": "#c0cbff"}],
    },
    {
      "_name": "PLUSHIES!!!",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 32,
      "_desc": "We create all kinds of different textiles for either collectors or for clothing manufacturers!",
      "_store": "NA",
      "_coverImg": "http://3.bp.blogspot.com/-FLwOYfIZ5dQ/VHIxD6WgGhI/AAAAAAAAJeA/PAyxaiT9uPM/s1600/IMG_1983.JPG",
      "_tagList": [{"_name": "World", "_color": "#c0cbff"}, {"_name": "Textiles", "_color": "#c0cbff"}],
    },
    {
      "_name": "Monkey Business",
      "_id": "123456",
      "_memList": ["000000", "999999"],
      "_numMem": 6,
      "_desc": "We create all kinds of different textiles for either collectors or for clothing manufacturers!",
      "_store": "NA",
      "_coverImg": "http://1.bp.blogspot.com/-Txgu8uawwfU/Tv1YT98TlhI/AAAAAAAAAKM/RA-sZFf85Nw/s320/Small+Business+Logos+4.jpg",
      "_tagList": [{"_name": "World", "_color": "#c0cbff"}, {"_name": "Textiles", "_color": "#c0cbff"}],
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
      <h1 className="mt-24 ml-12 text-teal-800">
        <em>Browse groups</em>
      </h1>

      <div className="mt-8 ml-12 mr-12 flex gap-8 flex-start">
        <div className="sticky border-r-2 mr-6 p-4 border-slate-400 dark:border-slate-800 w-1/4 h-96">
          <h2 className="mt-4 text-xl text-teal-500 font-bold">Search</h2>
          <h3 className="mt-4 text-emerald-500">filter:</h3>
          <div className="mt-2 bg-slate-950 w-full rounded-lg pl-2 text-emerald-500 border-emerald-900 border-2">
            ...
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8 duration-500">
          {groupList()}
        </div>
      </div>
    
    </div>
  );
}