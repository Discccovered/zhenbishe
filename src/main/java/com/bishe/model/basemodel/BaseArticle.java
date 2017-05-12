package com.bishe.model.basemodel;

public class BaseArticle {

	private String articleid;
	private String title;
	private String author;
	private String createtime;
	private String paragraph;
	private String status;
	private String picture;
	private String type;

	public String getArticleid() {
		return articleid;
	}

	public void setArticleid(String articleid) {
		this.articleid = articleid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public String getParagraph() {
		return paragraph;
	}

	public void setParagraph(String paragraph) {
		this.paragraph = paragraph;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	private int credit;
}
