import React, { Component } from 'react'
import NewsItem from './NewsItem' 
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: 'general'
    }
    
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    }

    articles = []

    constructor(props){
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page:1,
            totalaarticles:0,
        };
        
    }


    async updateNews(pageNo){
        this.props.setProgress(0); 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({loading:false})
        this.setState({articles:parsedData.articles, totalaarticles: parsedData.totalResults});
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }
    
    
    
    handleNext = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b4108eaa38340ad96e51d2798f6c44a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({loading:false})
        // // console.log(parsedData);
        // this.setState({
        //     page: this.state.page+1,
        //     articles:parsedData.articles
        // })
        this.setState({
            page: this.state.page+1
        })
        this.updateNews();
        
    }
    
    handlePrev = async () =>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b4108eaa38340ad96e51d2798f6c44a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({loading:false})
        // this.setState({
        //     page: this.state.page-1,
        //     articles:parsedData.articles
        // })
        this.setState({
            page: this.state.page-1
        })
        this.updateNews();
    }


    fetchMoreData = async () =>{
        this.setState({
            page: this.state.page+1,
        })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b4108eaa38340ad96e51d2798f6c44a&page=${this.state.page+1}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({loading:false})
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), 
            totalaarticles: parsedData.totalResults
        });
        
    }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>News Monkey - Top headlines</h2>
        
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length != this.state.totalaarticles}
        loader={<Spinner></Spinner>}
    >
        <div className="container">
        

        <div className="row">
        {this.state.articles.map((element)=>{
            return element.urlToImage && <div className="col-md-3 my-3" key = {element.url}>
            <NewsItem title = {element.title.slice(0,100)} description = {element.description && element.description.slice(0,88)+"..."} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>
        })}
        </div>
        
        </div>
        </InfiniteScroll>
    

        
      </div>
    )
  }
}
