from calendar import month
from datetime import date
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import os
import psycopg2
from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

################################################## 
# Flask Setup#################################################
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgress@localhost:5432/project3_db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.create_all

class RigCount(db.Model):
    __tablename__ = 'us_rig_count'
    index = db.Column(db.Integer, primary_key=True)
    basin_name = db.Column(db.String())
    date = db.Column(db.String())
    Month = db.Column(db.String())
    Year = db.Column(db.String())
    Oil = db.Column(db.Integer())
    Gas = db.Column(db.Integer())
    Misc = db.Column(db.Integer())
    rig_count = db.Column(db.Integer())
    size = db.Column(db.Float())

class USProd(db.Model):
    __tablename__ = 'us_basin_prod'
    index = db.Column(db.Integer(),primary_key=True)
    period = db.Column(db.DateTime())
    basins = db.Column(db.String())
    # series-description = db.Column(db.String())
    value = db.Column(db.Integer())
    size = db.Column(db.Float())
@app.route('/')
def home():
    # return () this is where we will call render templace and index.html
    return render_template("index.html")
@app.route('/rig')
def rig_count():
        rigcount = RigCount.query.all()
        # usbasinprod = USProd.query.all()
        
        results =[
            {
                "Basin_Name": rigs.basin_name,
                "Date": rigs.date,
                "Rig_Count": rigs.rig_count,
                "Size": rigs.size,
            } for rigs in rigcount]
        # usbasinprod = USProd.query.all()
        
        # results1 =[
        #     {
        #         "Basin_Name": prod.basins,
        #         "Date": prod.period,
        #         "Oil_Prod": prod.value,
        #         "Size": prod.size,
        #     } for prod in usbasinprod]
        return jsonify(results)

@app.route('/prod') 
def us_prod():
        usbasinprod = USProd.query.all()
        results1 =[
            {
                "Basin_Name": prod.basins,
                "Date": prod.period,
                "Oil_Prod": prod.value,
                "Size": prod.size,
            } for prod in usbasinprod]

        # return {"count": len(results), "us_rig_count": results}
        return jsonify(results1)

if __name__ == "__main__":
    app.run(debug=True)