import './index.scss';
import { useEffect, useState, useRef, Fragment, memo } from 'react';
import { GET } from '../../utils/api'
import { BASE_URL_IMG } from '../../constants';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

export default memo(function Hero () {

    const [myIndex, setIndex] = useState(0);
    const [valuePage, setValuePage] = useState(0);
    const counter = useRef({value: 0});
    
    const heroRef = useRef(null);
    const heroImgRef = useRef(null);
    const heroRoundPages = useRef(null);
    const btnContainer = useRef(null);

    const [popularList, setPopularList] = useState({ results: [{
        backdrop_path: '',
        title: '',
        vote_average: '',
        overview: '',
    }]
    });

    const touchStartX = useRef({});
    const touchEndX = useRef({});

    const handleOnNextButtonClick = () => {
        setIndex(prev => prev + 1)
        setValuePage(prev => prev + 1);
        counter.current.value += 1;
    }

    const handleOnBackButtonClick = () => {
        setIndex(prev=> prev - 1)
        setValuePage(prev => prev - 1);
        counter.current.value -= 1;
    }

    const handleOnPageHeroClick = (e) => {
        setIndex(Number(e.target.id))
        setValuePage(Number(e.target.id));
    }

    const change = () => {
        if (touchStartX.current.value > touchEndX.current.value && counter.current.value < 19) {
            setIndex(prev => prev + 1)
            setValuePage(prev => prev + 1); 
            counter.current.value += 1;
        } 
        
        if (touchStartX.current.value < touchEndX.current.value && counter.current.value > 0) {
            setIndex(prev => prev - 1)
            setValuePage(prev => prev - 1); 
            counter.current.value -= 1;
        } 
    }

    useEffect(() => {

        const onTouchStart = (e) => {
            touchStartX.current.value = e.changedTouches[0].clientX;
        }

        const onTouchEnd = (e) => touchEndX.current.value = e.changedTouches[0].clientX;

        btnContainer.current.addEventListener('touchstart', (e) => {
            onTouchStart(e) 
        })

        btnContainer.current.addEventListener('touchend', (e) => {
            onTouchEnd(e)
            change();    
        })

        return () => {
            btnContainer.current.removeEventListener('touchstart', (e) => {
                onTouchStart(e)
            });
            btnContainer.current.removeEventListener('touchend', (e) => {
                onTouchEnd(e)
                change();    
            })
        }
    }, [])

    useEffect(() => {
        GET('movie', 'popular', `&page=1&include_adult=false`)
        .then(data => {setPopularList(data); console.log(data)})
    }, [])

    return (
        <div ref={heroRef} className="Hero">
            <h1>{popularList.results[myIndex].title}</h1>
            { popularList.results.map((item, index) => 
                <Fragment key={index}>
                    <img key={index} ref={heroImgRef} style={{right:  valuePage * 100 + "vw" }}className="Hero-img" src={`${BASE_URL_IMG}${item.backdrop_path}`} alt="hero-img" />
                </Fragment>
            )}
            <div className="rounded-btn-container" >
                {popularList.results.map((_, index) => <button key={index} onClick={handleOnPageHeroClick} ref={heroRoundPages} className={myIndex === index ? 'btn-rounded active' : 'btn-rounded'} id={index} />)}
            </div>
            <div ref={btnContainer} className="btn-container">
                <button style={ myIndex === 0 ? {opacity: 0, pointerEvents: 'none' } : {opacity: 1, pointerEvents: 'all'}} onClick={handleOnBackButtonClick}><MdArrowBackIosNew className="hero-arrow"/></button>
                <button style={ myIndex === popularList.results.length - 1 ? {opacity: 0, pointerEvents: 'none' } : {opacity: 1, pointerEvents: 'all'}} onClick={handleOnNextButtonClick}><MdArrowForwardIos className='hero-arrow'/></button>
            </div>
        </div>
    )
})