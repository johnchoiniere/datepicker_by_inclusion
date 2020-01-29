import datepicker_by_inclusion
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    datepicker_by_inclusion.DatepickerByInclusion(
        id='input',
        date='2020-01-29',
        datesIncluded=['2020-01-23','2020-01-24','2020-01-26','2020-01-27','2020-01-28','2020-01-29']
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'date')])
def display_output(date):
    return 'You have entered {}'.format(date)


if __name__ == '__main__':
    app.run_server(debug=True)
