import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css'


function App() {
    const data = [
        {name: "Alex Lubchich", salary:800, increase: true, id: 1},
        {name: "Oleg Ustinov", salary:1200, increase: true, id: 2},
        {name: "Lev Petrov", salary:650, increase: false, id: 3}
    ]
    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}


export default App;


console.log(Math.floor(Math.random() * 50))