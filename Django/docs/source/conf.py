# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import sys
import os
import django


sys.path.insert(0, os.path.abspath('../../robotechnics/'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'robotechnics.settings')
django.setup()


project = 'Robotechnics'
copyright = '2023, ITS Tech'
author = 'ITS Tech'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.intersphinx',
]

templates_path = ['_templates']
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']

intersphinx_mapping = {
    'python': ('https://docs.python.org/3', None),
    'django': (
        'http://docs.djangoproject.com/en/stable/',
        'http://docs.djangoproject.com/en/stable/_objects/'
    ),
}
