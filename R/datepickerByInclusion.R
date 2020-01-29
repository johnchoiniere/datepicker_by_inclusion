# AUTO GENERATED FILE - DO NOT EDIT

datepickerByInclusion <- function(id=NULL, date=NULL, datesIncluded=NULL) {
    
    props <- list(id=id, date=date, datesIncluded=datesIncluded)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DatepickerByInclusion',
        namespace = 'datepicker_by_inclusion',
        propNames = c('id', 'date', 'datesIncluded'),
        package = 'datepickerByInclusion'
        )

    structure(component, class = c('dash_component', 'list'))
}
