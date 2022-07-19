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
def get_db_connection():    
    conn = psycopg2.connect(host='localhost',                       
    database='project3_db',                            
    user='postgres',                            
    password='postgress')    
    return conn
################################################## 
# Flask Routes#################################################
@app.route('/')

def index():  
      conn = get_db_connection()    
      cur = conn.cursor()    
    #   cur.execute('SELECT * FROM "us_basin_prod";') 
      cur.execute('SELECT * FROM "us_rig_count";')   
      data = cur.fetchall()    
      cur.close()
      conn.close()    
      return jsonify(data)    

if __name__ == "__main__":
    app.run(debug=True)