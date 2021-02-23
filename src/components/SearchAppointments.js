export function SearchAppointments(props){
  return (
    <div className="search-appointments row justify-content-center my-4">
    <div className="col-md-6">
      <div className="input-group">
        <input
          id="SearchApts"
          type="text"
          className="form-control"
          aria-label="Search Appointments"
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
               href="#">
              Pet Name
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderBy === 'aptDate' ? 'active' : '')
               }
               href="#">
              Date
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderBy === 'ownerName' ? 'active' : '')
               }
               href="#"> 
               Owner
            </button>
            <div role="separator" className="dropdown-divider" />
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderDir === 'asc' ? 'active' : '')
               }
               href="#">               Asc
            </button>
            <button 
               className = {
                  'sort-by dropdown-item ' + 
                  (props.orderDir === 'desc' ? 'active' : '')
               }
               href="#">               Desc
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}