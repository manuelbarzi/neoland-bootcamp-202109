function Spinner() {
    logger.info('Spinner -> render')
    
    return <div className="spinner container container--vertical container--gapped container--full">
        <img className="spinner__image" src="https://www.ithink.co/images/lg.ajax-spinner-preloader.gif" alt="spinner" />
    </div>
}