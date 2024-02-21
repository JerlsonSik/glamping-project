import {DateRange, DayPicker, SelectRangeEventHandler} from 'react-day-picker';
import { useState } from 'react';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import 'react-day-picker/dist/style.css';
const BookBanner = () => {

    const [selectedRange, setSelectedRange] = useState();
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      };

    const handleRangeSelect = (range) => {
        setSelectedRange(range);
        if (range?.from) {
            setFromValue(format(range.from, 'y-MM-dd'));
          } else {
            setFromValue('');
          }
          if (range?.to) {
            setToValue(format(range.to, 'y-MM-dd'));
          } else {
            setToValue('');
          }
    };
    
    return ( 

        <div className='bg-light'>
        <div className='container bg-transparent py-3 col-lg-10'>
                <form className="">
                    <div className='d-flex justify-content-center input-group'>
                        <span class="input-group-text" style={{backgroundColor:"white",paddingRight:"0px"}}><i class="fa fa-calendar"></i></span>
                        <input className='form-control' classsize={10} placeholder="From" value={fromValue} onClick={handleClick} style={{width:"175px",borderLeftStyle:"none",fontSize:"15px"}}/>
                    
                        <span className="justify-content-center px-2 pt-1" style={{backgroundColor:"blacks"}}><i class="fa fa-arrow-right"></i></span>
                        <span class="input-group-text" style={{backgroundColor:"white",paddingRight:"0px"}}><i class="fa fa-calendar"></i></span>
                        <input className='form-control form-control-sm' classsize={10} placeholder="To" value={toValue} onClick={handleClick} style={{width:"175px",borderLeftStyle:"none",fontSize:"15px"}}/>
                        <button className='btn btn-dark ms-2'><i class="fa fa-arrow-right" style={{color:"#ffffff"}}></i></button>
                        {/* <label><b>Guests</b></label>    
                        <select className='form-control form-control-sm' aria-label="Default select example" placeholder='Guests' style={{height:"30px", width:"60px"}}>
                            <option value="1">1</option>
                            <option selected value="2">2</option>
                            <option value="3">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                            <option value="3">6</option>
                        </select> */}                    
                    </div>
                    
                </form>

            {isOpen && (
                <div className='d-flex justify-content-center'>
                    <DayPicker id="StayDate" mode="range" selected={selectedRange} onSelect={handleRangeSelect}/>
                </div>
                )}
        </div>
        </div>
     );
}
 
export default BookBanner;