const Task = require('../models/model');

class Controller {
	async renderMain(req, res) {
		try {
			const task = await Task.find({}).lean();
			res.render('index', {
				title: 'Todo list',
				isIndex: true,
				task,
			});
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	renderCreate(req, res) {
		try {
			res.render('create', {
				title: 'Create tasks',
				isCreate: true,
			});
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	async createTask(req, res) {
		try {
			const create = new Task({
				title: req.body.title,
			});
			await create.save();
			res.status(201).redirect('/api');
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}

	async findTask(req, res) {
		try {
			const taskId = req.body.id;
			if (!taskId) {
				return res.status(404).json('id not specified');
			}
			const taskOne = await Task.findById(taskId);
			taskOne.completed = !!req.body.completed;
			await taskOne.save();
			res.status(201).redirect('/api');
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}
}

module.exports = new Controller();
