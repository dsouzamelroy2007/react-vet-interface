import { set } from "lodash";
import {useState, useEffect} from "react";

export function SearchAppointments(props){
  const [orderBy, setOrderBy]   = useState(props.orderBy);
  const [orderDir, setOrderDir] = useState(props.orderDir);

  useEffect(() => props.setOrderBy(orderBy) , [orderBy]);
  useEffect(() => props.setOrderDir(orderDir) , [orderDir]);

  const searchText = ({ target : { name, value}}) => {
    props.setQueryText(value);
  }
  return (
    <div className="search-appointments row justify-content-center my-4">
    <div className="col-md-6">
      <div className="input-group">
        <input
          id="SearchApts"
          type="text"
          className="form-control"
          aria-label="Search Appointments"
          onMouseLeave = {searchText}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by: <span className="caret" />
          </button>

          <div className="sort-menu dropdown-menu ">
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderBy === 'petName' ? 'active' : '')
               }
               href="#"
               name = "petName"
               onClick = {() => setOrderBy("petName")}
               >
              Pet Name
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderBy === 'aptDate' ? 'active' : '')
               }
               onClick = {() => setOrderBy("aptDate")}
               href="#">
              Date
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderBy === 'ownerName' ? 'active' : '')
               }
               onClick = {() => setOrderBy("ownerName")}
               href="#"> 
               Owner
            </button>
            <div role="separator" className="dropdown-divider" />
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderDir === 'asc' ? 'active' : '')
               }
               onClick = {() => setOrderDir("asc")}
               href="#">               Asc
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderDir === 'desc' ? 'active' : '')
               }
               onClick = {() => setOrderDir("desc")}
               href="#">               Desc
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}