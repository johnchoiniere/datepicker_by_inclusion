import datepicker_by_inclusion
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import pandas as pd

df = pd.read_csv('/home/john/cgr/app/static/mariners_2019.csv')

dates = df[df['catcher.name']=='Cal Raleigh']['Date']

app = dash.Dash(__name__)

app.layout = html.Div([
    datepicker_by_inclusion.DatepickerByInclusion(
        id='input',
        date='2020-01-29',
        datesIncluded=dates
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'date')])
def display_output(date):
    return 'You have entered {}'.format(date)


if __name__ == '__main__':
    app.run_server(debug=True)
